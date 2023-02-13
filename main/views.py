from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template import RequestContext

from django.views.generic import TemplateView

# Blog application imports.
from blog.models.article_models import Article
from blog.models.category_models import Category
from blog.forms.blog.comment_forms import CommentForm

#def index(request):
#
#    return render(request, 'main/index.html')

class IndexView(TemplateView):
   template_name = 'main/index.html'

   def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = Category.objects.filter(approved=True)
        return context

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
