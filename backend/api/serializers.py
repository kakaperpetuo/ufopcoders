from rest_framework import serializers
from django.contrib.auth import get_user_model

# Isso puxa automaticamente o banco de dados de usuários que seu colega criou
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # Coloque aqui os campos que o seu formulário vai mandar. 
        # (Estou supondo email e password, mas adicione 'nome' ou outros se tiver)
        fields = ['email', 'password'] 
        
        # Isso garante que a senha nunca seja devolvida pro frontend (segurança)
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # A mágica acontece aqui: create_user pega a senha e transforma em um código hash (criptografia)
        user = User.objects.create_user(**validated_data)
        return user