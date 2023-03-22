class CanvasUtil{
    constructor(ctx){
        this.ctx = ctx;
        this.width = this.ctx.canvas.width; 
        this.height = this.ctx.canvas.height;
        this.mouseX = 0; 
        this.mouseY = 0; 
        
        this.ctx.canvas.addEventListener('mousemove', (e) =>{
            const mousePosition = getMousePosition(this.ctx.canvas, e);
            this.mouseX = mousePosition.x; 
            this.mouseY = mousePosition.y;
        });
    }

    background(color){
        const tempFill = this.ctx.fillStyle; 
        this.ctx.fillStyle = color; 
        this.ctx.fillRect(0,0, this.width, this.height); 
        this.ctx.fillStyle = tempFill;
    }
}

function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
  
export default CanvasUtil