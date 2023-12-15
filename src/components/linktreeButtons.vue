<template>
    <div 
        class="linktree__btn--outer-container"
        v-for="(element, key, index) in buttonsData" 
        :key="key"
    >
        <div :class="{ 'linktree__btn--card': true, [element.cardClass]: true, [element.animated]:true }">
            <h2>{{ element.text }}</h2>
            <p>{{ element.desc }}</p>
            <button 
                :class="{ 'linktree__btn--general':true, [element.btnClass]: true }" 
                @click="redirectToLink(element.href)" 
                type="button" 
                aria-label="view project button"
            >
                View Project
            </button>
        </div>
    </div>
</template>
<script>

export default {
    props: [
        'buttonsData'
    ],
    methods: {
        redirectToLink(link) {
            window.open(link, '_blank');
        }
    }
}
</script>