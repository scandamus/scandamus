from django.http import HttpResponse

def pongfunc(request, *args, **kwargs):
    return HttpResponse('Pong Game')
