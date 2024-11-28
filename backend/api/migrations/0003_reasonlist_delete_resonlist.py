# Generated by Django 4.2.16 on 2024-11-28 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_resonlist'),
    ]

    operations = [
        migrations.CreateModel(
            name='ReasonList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reason', models.TextField()),
                ('title', models.CharField(blank=True, max_length=70, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='ResonList',
        ),
    ]
