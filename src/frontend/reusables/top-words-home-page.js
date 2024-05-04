let app_name = { fontSize: 60, marginRight: 200, marginLeft: 100, fontWeight: 100, marginTop: -28 };

let sign_up_style = { fontSize: 30, marginRight: 40, fontWeight: 600, backgroundColor: 'white', borderRadius: 20, width: '70%', textAlign: 'center', transition: 'background-color 0.3s ease-in-out', paddingBottom: 2, textDecoration: 'none',color:'black' };

let log_in_style = { fontSize: 30, marginRight: 40, fontWeight: 600, width: '60%', textAlign: 'center', alignSelf: 'center',textDecoration: 'none',color:'black' };

export const TopWords = () => {
    return (<div className="side-by-side-container" style={{ paddingTop: 60 }}>
        <div style={app_name}>Auto Note</div>
        <div style={{ fontSize: 30, marginRight: 40, fontWeight: 600 }}>About</div>
        <div style={{ fontSize: 30, fontWeight: 600 }}>Pricing</div>
    </div>)
}

export const AuthWords = () => {
    return (<div className="side-by-side-container" style={{ paddingTop: 60, position: 'absolute', right: 40, width: '10vw' }}>
        <a style={log_in_style} href='/log-in'>Log In</a>
        <a onMouseLeave={() => { }}
            onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            }} style={sign_up_style} href='/sign-up' >Sign Up</a>
    </div>)
}

