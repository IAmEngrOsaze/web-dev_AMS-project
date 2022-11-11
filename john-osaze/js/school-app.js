const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

const cardGroup = document.querySelector(".card-group");
const addCard = document.getElementById("addCard");

addCard.addEventListener("click", alertFunc);
function alertFunc() {
	swal("Write something here:", {
		text: 'Type in your school name',
		content: "input",
		button: {
			text: "Create",
			closeModal: false,
		}
	})
		.then((value) => {
			if (!value) {
				swal({
					title: "Error!",
					text: "Please provide a valid name for your school",
					icon: "warning",
					buttons: true,
					dangerMode: true,
				})
			} else {
				swal({
					title: "Success!",
					text: `You created: ${value}`,
					icon: "success",
					button: "Continue",
				});
				const singleCard = `<a href="create-course.html">
                <div class="mono-card">
                    <h2>${value}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            	</a>`;
				cardGroup.innerHTML += singleCard;
			}
		})
}