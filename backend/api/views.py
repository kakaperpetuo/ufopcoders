#from django.shortcuts import render
import uuid
from supabase import create_client
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from .serializers import UserSerializer, UserMeSerializer

User = get_user_model()

supabase = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # AllowAny é CRUCIAL aqui: significa que a pessoa NÃO precisa estar logada para criar uma conta
    permission_classes = [AllowAny]


class MeView(RetrieveAPIView):
    serializer_class = UserMeSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Retorna o usuário logado (self.request.user)
        return self.request.user


class UploadFotoPerfilView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser]

    def post(self, request):
        arquivo = request.FILES.get('foto')
        if not arquivo:
            return Response({"erro": "Nenhum arquivo enviado"}, status=400)

        extensao = arquivo.name.split('.')[-1]
        nome_arquivo = f"{request.user.id}_{uuid.uuid4()}.{extensao}"

        supabase.storage.from_("avatars").upload(
            nome_arquivo,
            arquivo.read(),
            {"content-type": arquivo.content_type}
        )

        url_publica = supabase.storage.from_("avatars").get_public_url(nome_arquivo)

        request.user.foto_perfil = url_publica
        request.user.save()

        return Response({"foto_perfil": url_publica})
