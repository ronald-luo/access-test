// Get accessibility issues
async function fetchData (e) {
    e.preventDefault() // stops page refresh

    const url = document.querySelector('#url').value
    const response = await fetch(`/api/test?url=${url}`)
    const data = await response.json()

    console.log(data.issues)

    displayIssues(data.issues)
}

// Add issues to DOM

function displayIssues (issues) {
    const container = document.querySelector('.issues')

    issues.forEach((issue) => {
        
        const output = document.createElement('div')
        output.classList.add("card")
        output.classList.add("my-5")
        output.classList.add("bg-dark")
        output.classList.add("p-3")
        output.classList.add("text-light")
        output.innerHTML = `
            <h4>${issue.message}</h4>
            <p class="bg-light text-dark p-3 my-3">${escapeHTML(issue.context)}</p>
            <p class="bg-secondary text-light p-2">CODE: ${issue.code}</p>
        `
        container.append(output)
    })
}

// Delete existing issues

// function deleteIssues () {
//     continue
// }


// Escape HTML
function escapeHTML(html) {
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
}


// Add event listeners
document.addEventListener('submit', fetchData)