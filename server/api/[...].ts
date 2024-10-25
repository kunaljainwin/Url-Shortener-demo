export default defineEventHandler(async(event)=>{
   await sendRedirect(event,'/pages/welcome',200)
})