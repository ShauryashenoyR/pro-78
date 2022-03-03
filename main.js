var images = ["file:///C:/Users/ArkitriXx/Downloads/ADVC78template-main/ADVC78template-main/me.jpg","https://media-exp1.licdn.com/dms/image/C5603AQH6G2wQaGxQxQ/profile-displayphoto-shrink_200_200/0/1612510468618?e=1651104000&v=beta&t=NamUrOc968nFQN3ksadrTF7D7cc9hcEzQpLoAioaPh8", "https://pbs.twimg.com/media/CjixLbyUUAAMYCu.jpg"];
var names = ["Family Book","me", "dad", "mom"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
