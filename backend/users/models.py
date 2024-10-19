from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from django.core.validators import RegexValidator
from django.utils import timezone

ADMIN = 0
NORMAL_USER = 1
WRITER = 2

class Role(models.Model):
    '''
    La entrada de Roles es gestionada por el sistema,
    creada automáticamente a través de una migración de datos de Django.
    '''

    ROLE_CHOICES = (
        (ADMIN, 'admin'),
        (NORMAL_USER, 'normal_user'),
        (WRITER, 'writer'),
    )

    id = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, primary_key=True)

    def __str__(self):
        return self.get_id_display()

class AccountManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Crea y guarda usuarios que tenga un correo,  una fecha de cumpleaños y una contraseña.
        """
        if not email:
            raise ValueError('El usuario debe tener un correo')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        """
        Crea y guarda superusuarios con un correo y una contraseña.
        """
        user = self.create_user(
            email,
            password=password
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    
    id= models.AutoField(primary_key=True)
    username = models.CharField(max_length=25, blank=True, null=True)
    name = models.CharField(max_length=25, blank=True, null=True)
    lastname = models.CharField(max_length=25, blank=True, null=True)
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    type = models.ManyToManyField(Role,default=[1])
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Numero de telefono: '+999999999999999'.")
    mobile_number = models.CharField(validators=[phone_regex], max_length=17, blank=False,null = False) 

    user_registered_on = models.DateTimeField(default=timezone.now, blank=True)

    otp = models.CharField(max_length=6, null = True, unique=True)
    otp_sent_on = models.DateTimeField(default=timezone.now, blank=True)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = AccountManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return f"{self.email} ({self.username})"

    def has_perm(self, perm, obj=None):
        "El usuario tiene un permsio en especifico?"
        # true or false
        return True

    def has_module_perms(self, app_label):
        "El usuario puede acceder a una aplicacion en especifica?"
        # True or false
        return True

    @property
    def is_staff(self):
        "El usuario hace parte de los administradores??"
        # Todos los administradores son parte del "Staff"
        return self.is_admin

    def verify_user_type(self,type):
        for x in self.type.all():
            if x.id == type:
                return True
        return False