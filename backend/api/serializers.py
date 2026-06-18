from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Project, Tag, ProjectTag

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # Usamos 'nome' para bater exatamente com a tabela do banco de dados
        fields = ['nome', 'email', 'password'] 
        
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        # O Django pega a senha, aplica a criptografia e salva tudo com segurança
        user = User.objects.create_user(**validated_data)
        return user

class ProjectCreateSerializer(serializers.ModelSerializer):
    topicos = serializers.ListField(
        child=serializers.CharField(max_length=100),
        write_only=True
    )

    class Meta:
        model = Project
        fields = ['id', 'titulo', 'descricao', 'topicos', 'numero_de_membros']

    def create(self, validate_data):
        topicos_data = validate_data.pop('topicos', [])

        user = self.context['request'].user
        validate_data['dono'] = user

        project = Project.objects.create(**validate_data)

        for topico_data in topicos_data:
            tag, created = Tag.objects.get_or_create(nome=topico_data.strip())
            
            ProjectTag.objects.create(
                project=project,
                tag=tag
            )
        
        return project