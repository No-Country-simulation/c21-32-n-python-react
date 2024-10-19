# Generated by Django 5.1.2 on 2024-10-19 02:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mascota',
            fields=[
                ('id_mascota', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=45)),
                ('tipo', models.CharField(max_length=45)),
                ('descripcion', models.CharField(max_length=45)),
                ('raza', models.CharField(max_length=45)),
                ('peso', models.CharField(max_length=45)),
                ('edad', models.IntegerField()),
                ('img_home_principal', models.ImageField(upload_to='')),
                ('img_print_mascota1', models.ImageField(upload_to='')),
                ('img_print_mascota2', models.ImageField(upload_to='')),
                ('img_print_mascota3', models.ImageField(upload_to='')),
                ('img_print_mascota4', models.ImageField(upload_to='')),
                ('estatus', models.CharField(max_length=45)),
                ('destacada', models.CharField(max_length=45)),
                ('id_refugio', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]