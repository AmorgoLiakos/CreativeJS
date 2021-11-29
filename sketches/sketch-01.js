const canvasSketch = require("canvas-sketch")

const settings = {
  dimensions: [1080, 1080]
}

const sketch = () => {
  return ({ context, width, height }) => {
    let grantientM = context.createLinearGradient(
      0,
      height / 2,
      width,
      height / 2
    )
    grantientM.addColorStop(0, "#085462")
    grantientM.addColorStop(1, "#00a0c1")
    context.fillStyle = grantientM
    context.fillRect(0, 0, width, height)
    let w = width * 0.1
    let h = height * 0.1
    let gap = width * 0.03
    let ix = width * 0.17
    let iy = height * 0.17

    const off = width * 0.02

    let x, y

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i
        y = iy + (h + gap) * j

        context.beginPath()
        context.rect(x, y, w, h)
        context.strokeStyle = "#fff"
        context.stroke()

        if (Math.random() > 0.5) {
          context.beginPath()
          context.rect(x + off / 2, y + off / 2, w - off, h - off)
          context.fillStyle = "#02ff28"
          context.fillRect(x + off / 4, y + off / 4, w - off / 2, h - off / 2)
          context.fillStyle = "#f1ff02"
          context.fillRect(x + off / 2, y + off / 2, w - off, h - off)
          context.strokeStyle = "blue"
        } else {
          context.beginPath()
          context.rect(x + off / 4, y + off / 4, w - off / 2, h - off / 2)
          context.strokeStyle = "#f2b75d"
          context.stroke()
        }
      }
    }
  }
}

canvasSketch(sketch, settings)
