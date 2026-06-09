#!/usr/bin/env python
"""
Seed das tags de tecnologias disponíveis na plataforma.
Execute com: python manage.py shell < seed_tags.py
"""
 
import os
import django
 
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()
 
from api.models import Tag
 
TAGS = [
    # Front-end
    {"nome": "React",       "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {"nome": "Next.js",     "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
    {"nome": "Vue.js",      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},
    {"nome": "Angular",     "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},
    {"nome": "TypeScript",  "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
    {"nome": "JavaScript",  "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {"nome": "Tailwind",    "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
    {"nome": "Vite",        "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"},
 
    # Back-end
    {"nome": "Python",      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
    {"nome": "Django",      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"},
    {"nome": "FastAPI",     "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"},
    {"nome": "Node.js",     "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
    {"nome": "Express",     "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
    {"nome": "Java",        "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
    {"nome": "Spring Boot", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"},
    {"nome": "C#",          "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"},
    {"nome": "Go",          "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"},
    {"nome": "PHP",         "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"},
 
    # Mobile
    {"nome": "React Native","logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {"nome": "Flutter",     "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"},
    {"nome": "Swift",       "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"},
    {"nome": "Kotlin",      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"},
 
    # Banco de Dados
    {"nome": "PostgreSQL",  "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
    {"nome": "MySQL",       "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    {"nome": "MongoDB",     "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
    {"nome": "Redis",       "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"},
    {"nome": "Supabase",    "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"},
    {"nome": "Firebase",    "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"},
 
    # DevOps / Infra
    {"nome": "Docker",      "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},
    {"nome": "Git",         "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
    {"nome": "Linux",       "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"},
    {"nome": "AWS",         "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
 
    # Design / UX
    {"nome": "Figma",       "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
 
    # IA / Data
    {"nome": "TensorFlow",  "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"},
    {"nome": "PyTorch",     "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"},
]
 
created = 0
skipped = 0
 
for tag_data in TAGS:
    tag, was_created = Tag.objects.get_or_create(
        nome=tag_data["nome"],
        defaults={"logo": tag_data["logo"]},
    )
    if was_created:
        print(f"  ✔ Criada: {tag.nome}")
        created += 1
    else:
        print(f"  ↷ Já existe: {tag.nome}")
        skipped += 1
 
print(f"\nConcluído — {created} criadas, {skipped} ignoradas.")
