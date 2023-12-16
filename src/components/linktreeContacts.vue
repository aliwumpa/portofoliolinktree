<template>
    <div class="linktree__contacts--outer-container">
        <div
            v-for="(element, key, index) in contactsData"
            :key="key"
            class="linktree__contacts--wrapper"
        >
            <button 
                class="linktree__contacts--btn" 
                @click="redirectToLink(element.href)"
                type="button"
                :aria-label="element.aria_label"
                v-tooltip.top="element.tooltip"
            >
                <span :class="`${element.fa}`"></span>
            </button>
        </div>
        <button 
            id="linktree__contacts--download-PDF" 
            @click="downloadPDF()"
            type="button"
            aria-label="download PDF button"
        >
            <span class="fa fa-download"></span>
            <span>Download My CV</span>
        </button>
    </div>

</template>
<script>
    export default {
        props: [
            'contactsData'
        ],
        methods: {
            redirectToLink(link) {
                window.open(link, '_blank');
            },
            downloadPDF() {
                var PDFpath = '/portofoliolinktree/CV_Update_Ali.pdf';
                var link = document.createElement('a');
                link.href = PDFpath;
                link.download = 'CV_Ali_Ridho_Fauzi_Rahman.pdf';
                document.body.appendChild(link);
                
                // click the link to force download
                link.click();

                // remove the element anchor after clicking link
                document.body.removeChild(link);
            }
        }
    }
</script>