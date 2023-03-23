<template>
    <div ref="section" class="page">
        <canvas ref="myCanvas"></canvas>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import CanvasUtil from '../assets/js/background/canvasUtil.js';
import Particle from '../assets/js/background/particle.js';
import Vec from '../assets/js/background/vector.js';

const myCanvas = ref(null);
const section = ref(null);
let ctx;

const cols = 30;
const rows = 22;
const particles = [];
let particle;
let util;
const foods = [
    '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🫐', '🥝', '🍅', '🫒', '🥥', '🥑', '🍆', '🥔', '🥕', '🌽', '🌶️', '🫑', '🥒', '🥬', '🥦', '🧄', '🧅', '🍄', '🥜', '🫘', '🌰', '🍞', '🥐', '🥖', '🫓', '🥨', '🥯', '🥞', '🧇', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🫔', '🥙', '🧆', '🥚', '🍳', '🥘', '🍲', '🫕', '🥣', '🥗', '🍿', '🧈', '🧂', '🥫', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🥮', '🍡', '🥟', '🥠', '🥡', '🦪', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🧁', '🥧', '🍫', '🍬', '🍭', '🍮', '🍯', '🍼', '🥛', '☕', '🫖', '🍵', '🍶', '🍾', '🍷', '🍸', '🍹', '🍺', '🍻', '🥂', '🥃', '🫗', '🥤', '🧋', '🧃', '🧉', '🧊'
];

onMounted(() => {
    myCanvas.value.width = section.value.clientWidth;
    myCanvas.value.height = section.value.clientHeight;

    ctx = myCanvas.value.getContext('2d');

    setup(); 
    draw();
});

const setup = () => {
    const width = myCanvas.value.width; 
    const height = myCanvas.value.height;

    for (let i = 0; i < cols; i++) {
        const x = (i + 0.5) * (width / cols);
        for (let q = 0; q < rows; q++) {
            const y = (q + 0.5) * (height / rows);
            const p = new Particle(ctx, x, y);
            p.setEmoji(foods[Math.floor(Math.random() * foods.length)])
            particles.push(p);
        }
    }

    particle = new Particle(ctx, width / 2, height / 2 );
    particle.applyForce(Vec.random(1));

    util = new CanvasUtil(ctx); 
}

const draw = () =>{
    util.background('white')
    particle.update('bounce');
    for (let p of particles) {
        p.closeTo(particle.position, 100);
        p.update();
        p.show();
    }
    window.requestAnimationFrame(draw);
}

</script>

<style lang="scss">
.page{
    width: 100%; 
    height: 100%;
}
</style>