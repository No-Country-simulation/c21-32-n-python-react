# Generated by Django 5.1.2 on 2024-10-21 08:30

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('adopcion', '0001_initial'),
        ('mascotas', '0001_initial'),
        ('refugio', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='adopcion',
            name='id_mascota',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='mascotas.mascota'),
        ),
        migrations.AddField(
            model_name='adopcion',
            name='id_operador',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='adopciones_atendidas', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='adopcion',
            name='id_refugio',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='refugio.refugio'),
        ),
        migrations.AddField(
            model_name='adopcion',
            name='id_solicitante',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='adopciones_solicitadas', to=settings.AUTH_USER_MODEL),
        ),
    ]
