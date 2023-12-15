<template>
    <div class="linktree__introduction--outer">
        <div class="linktree__introduction--col1">
            <div class="linktree__introduction--bg-img">
                <img src="../assets/introduction_photo.PNG" alt="introduction_photo" width="500" height="600" />
            </div>       
            <h1>Ali Ridho Fauzi Rahman</h1>
        </div>
        <div class="linktree__introduction--col2">
            <div>
                <p>
                    My name is Ali Ridho Fauzi Rahman, you can call me Ali.
                    <br>
                    I am a front-end developer with 3+ years experience. HTML, CSS, JS, Pug, SCSS, React and VueJS have been my language expertise in this field.
                    <br>
                    Slicing design and turning it into interactive, mobile responsive website code has been my passion.
                </p>
            </div>
            <div class="linktree__introduction--col2-skills"> 
                <h2>Professional Skills</h2>
                <div class="linktree__introduction--col2-skills-grid">
                    <div v-for="(item, index) in items" :key="index">
                        <div class="linktree__introduction--col2-skills-grid-item">
                            <svg class="radial-progress" :data-countervalue="item.percent" viewBox="0 0 80 80">
                                <circle class="bar-static" cx="40" cy="40" r="35"></circle>
                                <circle :class="`bar--animated ${item.className}`" :cx="40" :cy="40" :r="35"></circle>
                                <text class="countervalue start" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">
                                    {{ item.percent + '%' }}
                                </text>
                            </svg>
                            <p class="label">{{ item.label }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            items: [
                { percent: 90, label: 'HTML 5', className: 'progress--90' },
                { percent: 90, label: 'CSS', className: 'progress--90' },
                { percent: 90, label: 'Javascript', className: 'progress--90' },
                { percent: 70, label: 'Vue JS', className: 'progress--70' },
                { percent: 50, label: 'React JS', className: 'progress--50' }
            ],
        };
    }
}
</script>