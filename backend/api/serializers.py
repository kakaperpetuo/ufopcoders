from rest_framework import serializers
from django.contrib.auth import get_user_model

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