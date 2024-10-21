# Generated by Django 5.1.2 on 2024-10-21 05:10

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('mascotas', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Adopcion',
            fields=[
                ('id_adopcion', models.IntegerField(primary_key=True, serialize=False)),
                ('id_refugio', models.IntegerField()),
                ('estatus', models.CharField(max_length=50)),
                ('fecha', models.DateField()),
                ('observaciones', models.TextField()),
                ('id_mascota', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='mascotas.mascota')),
                ('id_operador', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='adopciones_atendidas', to=settings.AUTH_USER_MODEL)),
                ('id_solicitante', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='adopciones_solicitadas', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
