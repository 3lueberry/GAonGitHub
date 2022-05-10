# from django.shortcuts import render
from django.http import HttpResponse
from .models import Members
# Create your views here.

def index(request):
    members = Members.objects.all()
    # members = Members.objects.all()[5:10] [offset:max]
    output = ', '.join([member.name for member in members])
    return HttpResponse(output)



def add_member(request):
    member = Members(name='Harry')
    member.save()
    return HttpResponse('created')


def del_member(request):
    member = Members.objects.filter(name='HARRY')
    member.delete()
    return HttpResponse('deleted')


def update_member(request):
    member = Members.objects.get(name='Harry')
    member.name = 'HARRY'
    member.save()
    return HttpResponse('updated')


def home(request):
    return HttpResponse('Home')


def cost(request):
    return HttpResponse('Cost')



# member = Members.objects.get(name='...')
# member.addresses_set.all()
# member.addresses_set.count()
# member.addresses_set.filter(street_name__starts_with='..')

# <one_model>.<many_model>_set.filter/get/all()

# Addresses.objects.get(id='...').member
# Addresses.objects.get(id='...').member.id
# Addresses.objects.get(id='...').memeber.name
# Addresses.objects.filter(memeber__id='...')