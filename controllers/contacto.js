
module.exports.contactController = (req,res) =>{
    // const message = await contact()
   
        return res.status(200).render("form", {layout: "main"})


}