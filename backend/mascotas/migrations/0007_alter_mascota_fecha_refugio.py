# Generated by Django 5.1.2 on 2024-10-22 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mascotas', '0006_mascota_fecha_refugio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mascota',
            name='fecha_refugio',
            field=models.DateField(),
        ),
    ]