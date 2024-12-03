document.addEventListener('DOMContentLoaded', function () {
  
    // Declaração de variáveis
    let agPosY = 0;
    const agTimeline = document.querySelector('.js-timeline');
    const agTimelineLine = document.querySelector('.js-timeline_line');
    const agTimelineLineProgress = document.querySelector('.js-timeline_line-progress');
    const agTimelinePoints = document.querySelectorAll('.js-timeline-card_point-box');
    const agTimelineItems = document.querySelectorAll('.js-timeline_item');
    const agOuterHeight = window.outerHeight;
    let agHeight = window.innerHeight;
    let previousPosY = -1;
    let agFlag = false;
  
    // Evento de scroll para atualizar a timeline
    window.addEventListener('scroll', fnOnScroll);
  
    // Evento de redimensionamento para atualizar a timeline
    window.addEventListener('resize', fnOnResize);
  
    function fnOnScroll() {
      agPosY = window.scrollY;
      fnUpdateFrame();
    }
  
    function fnOnResize() {
      agPosY = window.scrollY;
      agHeight = window.innerHeight;
      fnUpdateFrame();
    }
  
    function fnUpdateWindow() {
      agFlag = false;
  
      // Atualização da linha de progresso da timeline
      const firstPointTop = agTimelineItems[0].querySelector('.js-timeline-card_point-box').getBoundingClientRect().top + window.scrollY;
      const firstItemTop = agTimelineItems[0].getBoundingClientRect().top + window.scrollY;
      const lastPointTop = agTimelineItems[agTimelineItems.length - 1].querySelector('.js-timeline-card_point-box').getBoundingClientRect().top + window.scrollY;
      const timelineTop = agTimeline.getBoundingClientRect().top + window.scrollY;
      const timelineHeight = agTimeline.offsetHeight;
  
      agTimelineLine.style.top = (firstPointTop - firstItemTop) + "px";
      agTimelineLine.style.bottom = (timelineTop + timelineHeight - lastPointTop) + "px";
  
      if (previousPosY !== agPosY) {
        previousPosY = agPosY;
        fnUpdateProgress();
      }
    }
  
    function fnUpdateProgress() {
      const lastPointTop = agTimelineItems[agTimelineItems.length - 1].querySelector('.js-timeline-card_point-box').getBoundingClientRect().top + window.scrollY;
      const progressTop = agTimelineLineProgress.getBoundingClientRect().top + window.scrollY;
      let progressHeight = agPosY - progressTop + agOuterHeight / 2;
  
      if (lastPointTop <= agPosY + agOuterHeight / 2) {
        progressHeight = lastPointTop - progressTop;
      }
      agTimelineLineProgress.style.height = progressHeight + "px";
  
      agTimelineItems.forEach(function (item) {
        const itemTop = item.querySelector('.js-timeline-card_point-box').getBoundingClientRect().top + window.scrollY;
  
        if (itemTop < agPosY + 0.5 * agOuterHeight) {
          item.classList.add('js-ag-active');
        } else {
          item.classList.remove('js-ag-active');
        }
      });
    }
  
    function fnUpdateFrame() {
      if (!agFlag) {
        requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
    }
  
  });
