from django.db import models
class Job_title(models.Model):
    name = models.CharField(max_length=255)

class UserProfile(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=30)
    avatarUrl = models.CharField(max_length=150)
    usertag = models.CharField(max_length=30)
    department = models.CharField(max_length=30)
    birthday = models.DateField()
    phone = models.CharField(max_length=30)

    """
   {
    "first_name": "Aruzhan",
    "last_name": "Kubayeva",
    "email": "aruzhankubayeva03@gmail.com.com",
    "password": "newl1215@",
    "avatarUrl": "https://cgevent.ru/wp-content/uploads/2021/04/ib.jpeg",
    "usertag": "akn",
    "department": "Android",
    "birthday": "2003-01-25",
    "phone": "776-919-5965"
    } 
    {
    "first_name": "Sabyr",
    "last_name": "Tankash",
    "email": "sabyronline@gmail.com",
    "password": "secure2707",
    "avatarUrl": "https://cgevent.ru/wp-content/uploads/2021/04/ib.jpeg",
    "usertag": "al",
    "department": "IOS",
    "birthday": "2004-07-27",
    "phone": "555-123-5785"
    }
    {
    "first_name": "Maral",
    "last_name": "Maksut",
    "email": "maralmaksut@gmail.com",
    "password": "maksutova",
    "avatarUrl": "https://cgevent.ru/wp-content/uploads/2021/04/ib.jpeg",
    "usertag": "MM",
    "department": "Manager",
    "birthday": "2002-09-30",
    "phone": "555-123-5785"
    }
    {
    "first_name": "Aigul",
    "last_name": "Zhamenova",
    "email": "zhamenova01@gmail.com",
    "password": "aigulek2001",
    "avatarUrl": "https://cgevent.ru/wp-content/uploads/2021/04/ib.jpeg",
    "usertag": "ai",
    "department": "Analyst",
    "birthday": "2001-10-27",
    "phone": "555-123-5785"
    }
    {
    "first_name": "Azat",
    "last_name": "Kadyr",
    "email": "AzatKadyr@gmail.com",
    "password": "azatkadyr2001",
    "avatarUrl": "https://cgevent.ru/wp-content/uploads/2021/04/ib.jpeg",
    "usertag": "ai",
    "department": "Analyst",
    "birthday": "2001-01-05",
    "phone": "555-123-5785"
    }
    {
    "first_name": "Akezhan",
    "last_name": "Alkhiyev",
    "email": "alkhiyevakezhan@gmail.com",
    "password": "azatkadyr2001",
    "avatarUrl": "https://cgevent.ru/wp-content/uploads/2021/04/ib.jpeg",
    "usertag": "akh",
    "department": "IOS",
    "birthday": "2002-03-02",
    "phone": "555-123-3214"
    }
    {
    "first_name": "Akezhan",
    "last_name": "Alkhiyev",
    "email": "alkhiyevakezhan@gmail.com",
    "password": "azatkadyr2001",
    "avatarUrl": "https://cgevent.ru/wp-content/uploads/2021/04/ib.jpeg",
    "usertag": "akh",
    "department": "IOS",
    "birthday": "2002-03-02",
    "phone": "555-123-3214"
    }
    """