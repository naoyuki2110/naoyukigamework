const OPTIONS = { align: 'start', loop: true }

const emblaNode = document.querySelector('.gamelatestinfo.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtn = emblaNode.querySelector('.embla__button--prev')
const nextBtn = emblaNode.querySelector('.embla__button--next')
const dotsNode = document.querySelector('.embla__dots')

let dotNodes = []

const emblaApiLatestInfo = EmblaCarousel(viewportNode, OPTIONS)

const createDotButtonHtml = (emblaApi, dotsNode) => {
  const dotTemplate = document.getElementById('embla-dot-template')
  const snapList = emblaApi.scrollSnapList()
  dotsNode.innerHTML = snapList.reduce((acc) => acc + `<button class="embla__dot" type="button"></button>`, '')
  return Array.from(dotsNode.querySelectorAll('.embla__dot'))
}

const addDotButtonClickHandlers = (emblaApi, dotNodes) => {
  dotNodes.forEach((dotNode, index) => {
    dotNode.addEventListener('click', () => emblaApi.scrollTo(index), false)
  })
}

const toggleDotButtonsActive = (emblaApi, dotNodes) => {
  if (!dotNodes.length) return
  const previous = emblaApi.previousScrollSnap()
  const selected = emblaApi.selectedScrollSnap()
  dotNodes[previous].classList.remove('embla__dot--selected')
  dotNodes[selected].classList.add('embla__dot--selected')
}

const createAndSetupDotButtons = (emblaApi, dotsNode) => {
  dotNodes = createDotButtonHtml(emblaApi, dotsNode)
  addDotButtonClickHandlers(emblaApi, dotNodes)
  toggleDotButtonsActive(emblaApi, dotNodes)
}

createAndSetupDotButtons(emblaApiLatestInfo, dotsNode)
emblaApiLatestInfo.on('reInit', () => createAndSetupDotButtons(emblaApiLatestInfo, dotsNode))
emblaApiLatestInfo.on('select', (emblaApi) => toggleDotButtonsActive(emblaApi, dotNodes))

prevBtn.addEventListener('click', () => emblaApiLatestInfo.scrollPrev(), false)
nextBtn.addEventListener('click', () => emblaApiLatestInfo.scrollNext(), false)
