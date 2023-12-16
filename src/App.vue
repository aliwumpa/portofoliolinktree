<template>
  <div class="linktree__bg">
    <div class="linktree__btn--container">
      <button 
        type="button"
        :name="'Go to ' + backTextButton"
        :aria-label="'Go to ' + backTextButton"
        :class="{'linktree__btn--container-back':true, 'linktree__btn--container-back-index': activePage === 4}"
        v-show="activePage !== 1"
        @click="backFlipPage()"
      >
        Back to {{ backTextButton }}
      </button>
      <button 
      type="button"
      :name="'Go to ' + goTextButton"
      :aria-label="'Go to ' + goTextButton"
      class="linktree__btn--container-go"
      v-show="activePage !== 4"
      @click="goFlipPage()"
      >
        Go to {{ goTextButton }}
      </button>
    </div>

    <section 
      id="section__introduction" 
      :class="{'active__1' : activePage === 1}"
      v-show="activePage === 1"
    >
      <!-- introduction -->
      <h1>Introduction</h1>
      <link-tree-introduction></link-tree-introduction>
    </section>
    <section 
      id="section__projects" 
      :class="{'active__2' : activePage === 2}"
      v-show="activePage === 2"
    >
      <h1>Projects</h1>
      <link-tree-buttons :buttonsData="buttonsData"></link-tree-buttons>
    </section>
    <section 
      id="section__contacts" 
      :class="{'active__3' : activePage === 3}"
      v-show="activePage === 3"
    >
      <!-- Contact -->
      <h1>Contacts</h1>
      <link-tree-contacts :contactsData="contactsData"></link-tree-contacts>
    </section>
    <section 
      id="section__credits" 
      :class="{'active__4' : activePage === 4}"
      v-show="activePage === 4"
    >
      <!-- Contact -->
      <h1>Credits</h1>
      <div class="linktree__credits--outer-container">
        <img src="./assets/shigure-ui-dance.gif" width="500" height="400" alt="shigure ui"/>
        <p>&copy; Copyright &nbsp;{{ currentYear }}, all codes of this portofolio website is belong to aliwumpa@github.io</p>
        <div>
          <audio controls loop volume="0.1">
            <source src="./assets/9mm.mp3" type="audio/mp3">
            Your browser does not support the audio element.
          </audio> 
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import linktreeButtons from './components/linktreeButtons.vue';
  import linktreeIntroduction from './components/linktreeIntroduction.vue';
  import linktreeContacts from './components/linktreeContacts.vue';

  export default {
    components: {
      'link-tree-introduction': linktreeIntroduction,
      'link-tree-buttons': linktreeButtons,
      'link-tree-contacts': linktreeContacts
    },
    data() {
      return {
        activePage: 1,
        currentYear: null,
        buttonsData: [
          {
            key: 1,
            cardClass: 'linktree__btn--card--purple',
            btnClass: 'linktree__btn--purple',
            animated: 'animate__animated animate__fadeInLeft', 
            text: 'Multistep Form App',
            desc: 'A long-form broken down into multiple pieces/steps with validation for store apps',
            href: 'https://aliwumpa.github.io/portfoliovue/'
          },
          {
            key: 2,
            cardClass: 'linktree__btn--card--magenta',
            btnClass: 'linktree__btn--magenta',
            animated: 'animate__animated', 
            text: 'Scribble React App',
            desc: 'Notes of learning progress React JS',
            href: 'https://aliwumpa.github.io/portfolioreact/'            
          },
          // {
          //   key: 3,
          //   cardClass: 'linktree__btn--card--pink',
          //   btnClass: 'linktree__btn--pink',
          //   animated: 'animate__animated', 
          //   text: 'Asian Civilisations Museum - National Heritage Board',
          //   desc: 'Slicing project for Asian Civilisations Museum with Pug,SCSS, and jQuery',
          //   href: 'https://www.nhb.gov.sg/acm/' 
          // },
          // {
          //   key: 4,
          //   cardClass: 'linktree__btn--card--orange',
          //   btnClass: 'linktree__btn--orange',
          //   animated: 'animate__animated', 
          //   text: 'Founders Memorial - Find My Value',
          //   desc: 'Slicing project for Founders Memorial page Find My Value with Pug,SCSS, and jQuery',
          //   href: 'https://www.foundersmemorial.gov.sg/findmyvalue' 
          // },
          // {
          //   key: 5,
          //   cardClass: 'linktree__btn--card--yellow',
          //   btnClass: 'linktree__btn--yellow',
          //   animated: 'animate__animated', 
          //   text: 'PSD Challenge - Podcast',
          //   desc: 'Slicing project for PSD Challenge with Pug,SCSS, and jQuery',
          //   href: 'https://psdchallenge.psd.gov.sg/podcast' 
          // }
        
          // 'linktree__btn--olive',
          // 'linktree__btn--green'
        ],
        contactsData: [
          {
            key: 1,
            fa: 'fa fa-linkedin',
            href: 'https://www.linkedin.com/in/ali-ridho-fauzi-rahman/',
            aria_label: 'button linkedin',
            tooltip: 'linkedin'
          },
          {
            key: 2,
            fa: 'fa fa-github',
            href: 'https://github.com/aliwumpa',
            aria_label: 'button github',
            tooltip: 'github'
          },
          {
            key: 3,
            fa: 'fa fa-twitter',
            href: 'https://twitter.com/aliwumpa',
            aria_label: 'button twitter',
            tooltip: 'twitter'
          },
          {
            key: 4,
            fa: 'fa fa-facebook-official',
            href: 'https://www.facebook.com/ali.wumpa/',
            aria_label: 'button facebook',
            tooltip: 'facebook'
          }
        ]
      }
    },
    mounted() {
      this.getYear();
    },
    computed: {
      goTextButton() {
        switch(this.activePage) {
          case 1 :
            return 'projects';
          case 2 :
            return 'contacts';
          case 3 :
            return 'credits';
          default :
            return true;
        }
      },
      backTextButton() {
        switch(this.activePage) {
          case 2 :
            return 'introduction';
          case 3 :
            return 'projects';
          case 4 :
            return 'contacts';
          default :
            return true;
        }
      }
    },
    methods: {
      goFlipPage() {
        this.activePage += 1;
      },
      backFlipPage() {
        this.activePage -= 1;
      },
      getYear() {
        const getfullYear = new Date().getFullYear();
        this.currentYear = getfullYear;
      }
    }
  }
</script>

<style lang="scss">
  @import './style/main.scss';
</style>
