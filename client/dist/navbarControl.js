const navbar = document.getElementsByClassName('navbarContainerWrapper')[0];

window.addEventListener('scroll', () => {
  const summary = document.getElementById('Summary');
  if (navbar.classList.contains('sticky')) {
    if (summary.getBoundingClientRect().top > -730) {
      navbar.classList.remove('sticky');
    }
  } else if (navbar.getBoundingClientRect().top < 0) {
    navbar.classList.add('sticky');
  }
}, true);

const campaignButton = document.getElementById('campaign');
// const faqButton = document.getElementById('faq');
const updatesButton = document.getElementById('updates');
const commentsButton = document.getElementById('comments');
const communityButton = document.getElementById('community');
let previouslyRendered = 'Campaign';
let component;

const hideComponent = (component) => {
  component = document.getElementById(previouslyRendered);
  component.classList.add('hidden');
};
campaignButton.addEventListener('click', () => {
  hideComponent(previouslyRendered);
  const Campaign = document.getElementById('Campaign');
  Campaign.classList.remove('hidden');
  previouslyRendered = 'Campaign';
});
updatesButton.addEventListener('click', () => {
  hideComponent(previouslyRendered);
  const Updates = document.getElementById('Updates');
  Updates.classList.remove('hidden');
  previouslyRendered = 'Updates';
});
commentsButton.addEventListener('click', () => {
  hideComponent(previouslyRendered);
  const comments = document.getElementById('Comments');
  comments.classList.remove('hidden');
  previouslyRendered = 'Comments';
});
communityButton.addEventListener('click', () => {
  hideComponent(previouslyRendered);
  const Community = document.getElementById('Community');
  Community.classList.remove('hidden');
  previouslyRendered = 'Community';
});
