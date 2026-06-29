from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Project, Tag

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

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'nome', 'logo']

class UserMeSerializer(serializers.ModelSerializer):
    tags  = TagSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['nome', 'email', 'bio', 'cargo', 'foto_perfil', 'tags']

class ProjectSerializer(serializers.ModelSerializer):
    topicos = serializers.SlugRelatedField(
        queryset=Tag.objects.all(),
        many=True,
        slug_field='nome',
        required=False,
        source='tags'
    )

    class Meta:
        model = Project
        fields = ['id', 'titulo', 'descricao', 'topicos', 'numero_membros']