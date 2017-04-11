const renderPearl = (ctx, x, y, speed, color = 'pink') => {
  ctx.save()
  ctx.clearRect(0, 0, 1000, 1000)
  ctx.beginPath()
  ctx.arc(x, y, 30, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fillStyle = color
  ctx.fill()
  ctx.restore()
}

export default renderPearl
