import { getProviders, signIn } from "next-auth/react"

function Login({providers}) {
    return (
        <div className="flex flex-col items-center justify-center bg-black min-h-screen w-full">
            <img className="w-500 sm:w-100 mb-5" src="https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif" alt="" />

            {Object.values(providers).map(provider =>(
                <div key={provider.name}>
                    <button className="bg-[#18D860] text-white font-bold p-5 rounded-full" onClick={() => signIn(provider.id,{callbackUrl: "/"})}>
                        Login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}
