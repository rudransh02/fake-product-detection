const Form = () =>
{
    function displayPrompt()
    {
        alert("The Transaction Has Been Recorded!");
        window.location.reload();
    }
    
    function throwError(input, message)
    {
        const element = input.parentElement.children[2];
        element.className = "error";
        element.innerHTML = message;
    }

    function onSuccess(input)
    {
        const element = input.parentElement.children[2];
        element.className = "success";
    }

    function checkRequired(input)
    {
        if (input.value.trim() === "")
        {
            throwError(input, "This field is required!");
            return false;
        }
        else
        {
            onSuccess(input);
            return true;
        }
    }
    function onSubmit(event)
    {
        console.clear();

        event.preventDefault();

        localStorage.clear();

        const fullname = document.getElementById('fullname');
        const email = document.getElementById('email');
        const clothcategory = document.getElementById('clothcategory');
        const clothmaterial = document.getElementById('clothmaterial');
        const clothcolor = document.getElementById('clothcolor');
        const clothsize = document.getElementById('clothsize');
        const clothcost = document.getElementById('clothcost');

        if (checkRequired(fullname) & checkRequired(email) & checkRequired(clothcategory) & checkRequired(clothmaterial) & checkRequired(clothcolor) & checkRequired(clothsize) & checkRequired(clothcost))
        {
            localStorage.setItem('Full Name', fullname.value);
            localStorage.setItem('Email Address', email.value);
            localStorage.setItem('Cloth Category', clothcategory.value);
            localStorage.setItem('Cloth Material', clothmaterial.value);
            localStorage.setItem('Cloth Color', clothcolor.value);
            localStorage.setItem('Cloth Size', clothsize.value);
            localStorage.setItem('Cloth Cost', clothcost.value);
            
            const body = document.body;
            body.classList = 'disable';
            
            const form = document.querySelector('.App');
            form.style.filter = 'blur(25px)';
            form.style.transitionDuration = '1s';
            
            setTimeout(() => {
                document.getElementById('fullname').value = "";
                document.getElementById('email').value = "";
                document.getElementById('clothcategory').value = "";
                document.getElementById('clothmaterial').value = "";
                document.getElementById('clothcolor').value = "";
                document.getElementById('clothsize').value = "";
                document.getElementById('clothcost').value = "";
            }, 1500);

            console.warn('Entries Successfully Logged Into The Local Database!');
            setTimeout(displayPrompt, 1200);
        }
        else
        {
            console.error("Encounterd Empty Fields!");
        }
    }

    return (
        <div className="App">
            <form className="form">
                <h2>Add Transactions To The Blockchain</h2>
    
                <div className="form-class">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" placeholder="Enter Your Full Name"/>
                    <small id="FN">Error Message</small>
                </div>
        
                <div className="form-class">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Enter Your Email"/>
                    <small id="E">Error Message</small>
                </div>
        
                <div className="form-class">
                    <label htmlFor="clothcategory">Cloth Category</label>
                    <input type="text" id="clothcategory" placeholder="Enter The Category Of Cloth"/>
                    <small id="CCA">Error Message</small>
                </div>
        
                <div className="form-class">
                    <label htmlFor="clothmaterial">Cloth Material</label>
                    <input type="text" id="clothmaterial" placeholder="Enter The Material Of Cloth"/>
                    <small id="CM">Error Message</small>
                </div>
        
                <div className="form-class">
                    <label htmlFor="clothcolor">Cloth Color</label>
                    <input type="text" id="clothcolor" placeholder="Enter The Color Of Cloth"/>
                    <small id="CCO">Error Message</small>
                </div>
        
                <div className="form-class">
                    <label htmlFor="clothsize">Cloth Size</label>
                    <input type="text" id="clothsize" placeholder="Enter The Size Of Cloth"/>
                    <small id="CS">Error Message</small>
                </div>
        
                <div className="form-class">
                    <label htmlFor="clothcost">Cloth Cost</label>
                    <input type="text" id="clothcost" placeholder="Enter The Cost Of Cloth"/>
                    <small id="CCT">Error Message</small>
                </div>

                <button id="submit" onClick={onSubmit}>Submit</button>
            </form>
    </div>
    );
}

export default Form;