from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template import RequestContext

def index(request):
    return render(request, 'main/index.html')

def handler404(request, *args, **argv):
    response = render_to_response('404.html', {},
    context_instance=RequestContext(request))
    response.status_code = 404
    return response

def handler500(request, *args, **argv):
    response = render_to_response('404.html', {},
    context_instance=RequestContext(request))
    response.status_code = 500
    return response
