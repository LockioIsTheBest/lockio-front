<template>
  <div class="text-3xl font-bold text-center">Foire aux questions</div>
  <div v-for="question in questions" class="max-w-2xl m-auto">
    <QuestionAccordion
      :question="question.question"
      :answer="question.answer"
    ></QuestionAccordion>
  </div>
</template>

<script setup>
import QuestionAccordion from "./QuestionAccordion.vue";

const questions = [
  {
    question: "Comment puis-je utiliser un Lockio ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem dolor, tristique vitae condimentum sed, porta efficitur ipsum. Suspendisse potenti. Quisque ultricies viverra ex, ac elementum augue porttitor quis. Vestibulum eleifend sodales leo, vitae molestie augue blandit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem dolor, tristique vitae condimentum sed, porta efficitur ipsum. Suspendisse potenti. Quisque ultricies viverra ex, ac elementum augue porttitor quis. Vestibulum eleifend sodales leo, vitae molestie augue blandit nec. ",
  },
  {
    question: "Comment le système de réservation fonctionne-t-il ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem dolor, tristique vitae condimentum sed, porta efficitur ipsum. Suspendisse potenti. Quisque ultricies viverra ex, ac elementum augue porttitor quis. Vestibulum eleifend sodales leo, vitae molestie augue blandit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem dolor, tristique vitae condimentum sed, porta efficitur ipsum. Suspendisse potenti. Quisque ultricies viverra ex, ac elementum augue porttitor quis. Vestibulum eleifend sodales leo, vitae molestie augue blandit nec. ",
  },
  {
    question:
      "Cette question est très cool, mais je ne sais pas vraiment comment la formuler (c’est un bon exemple de question longue) ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem dolor, tristique vitae condimentum sed, porta efficitur ipsum. Suspendisse potenti. Quisque ultricies viverra ex, ac elementum augue porttitor quis. Vestibulum eleifend sodales leo, vitae molestie augue blandit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem dolor, tristique vitae condimentum sed, porta efficitur ipsum. Suspendisse potenti. Quisque ultricies viverra ex, ac elementum augue porttitor quis. Vestibulum eleifend sodales leo, vitae molestie augue blandit nec. ",
  },
];
</script>

<style scoped></style>
