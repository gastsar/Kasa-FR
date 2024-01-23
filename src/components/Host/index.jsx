

export default function Host({nameHost, pictureHost}) {
    let fullname= nameHost.split(' '); // Divise la chaîne en fonction des espaces

    return (
        <div className="host">
            <p className="host__name"> <span>{fullname[0]}</span> <span>{fullname[1]}</span></p>
           
        <img  className="host__image" src={pictureHost} alt= {"Profil de " + nameHost} width="60px" height="60px" />

        </div>
    )
}
