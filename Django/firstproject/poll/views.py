from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse,Http404

from .models import Questions

# Create your views here.
def index(request):
    latest_question_list = Questions.objects.order_by('-pub_date')[:5]
    context = {
        'latest_question_list': latest_question_list,
    }
    return render(request, 'poll/index.html', context)

def detail(request, question_id):
    question = get_object_or_404(Questions,pk=question_id)
    return render(request, 'poll/detail.html', {'question': question})

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)
