from django.db import models
from datetime import datetime

class Job(models.Model):
    title = models.CharField(max_length=250)
    company = models.CharField(max_length=250)
    indusrty =  models.CharField(max_length=250)
    type_of_job = models.CharField(max_length=250)
    experience_level = models.CharField(max_length=100)
    experience_time = models.CharField(max_length=100)
    salary = models.CharField(max_length=100)
    description = models.TextField()
    requirements = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    
class Applyjob(models.Model):
    MINIMUN_QUALIFICATION_CHOICES = (
        ('Dp', 'Diploma'),
        ('Bs', 'Bachelor'),
        ('Ms', 'Masters'),
        ('Ct', 'Certificate'),
        ('Ph', 'PhD')
    )

    YEARS_OF_EXPERIENCE_CHOICES = (
        ('N', 'No Experince'),
        ('1', '1 Year'),
        ('2', '2 Years'),
        ('3', '3 Years'),
        ('4', '4 Years'),
        ('5', '5 Years'),
        ('6', '6 Years'),
        ('7', '7 Years'),
        ('8', '8 Years'),
        ('9', '9 Years'),
        ('10', '10 Years'),
        ('10+', '10+ Years')
    )
    job_id = models.ForeignKey('Job', on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    firstname = models.CharField(max_length=250)
    lastname = models.CharField(max_length=250)
    phone_number = models.CharField(max_length=250)
    minimum_qualification = models.CharField(choices=MINIMUN_QUALIFICATION_CHOICES, max_length=5)
    years_of_experience = models.CharField(choices=YEARS_OF_EXPERIENCE_CHOICES, max_length=5)
    salary_expectation = models.CharField(max_length=250)
    cover_letter = models.TextField()
    curriculum_vitae = models.FileField()
    
    def __str__(self):
        return self.title