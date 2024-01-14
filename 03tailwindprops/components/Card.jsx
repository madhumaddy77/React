import React from 'react'

function Card({username, btnText="Explore me"}) {
    console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIMDBISEhIKCQkKCAwJCQoKCR8JCgkMJSEnJyUhJCQpLjwzKSw4LSQkNEM0ODM1Nzc3KDFGS0g0PzxCQzEBDAwMEA8QGBISGDQdGR00MTE/MTExPzQ4PzExMTE/MTQ4Pz8/ND8/MTE/ND8xPzE4MTExPzExMTExMTQxNDE0Mf/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADsQAAIBAgQCCAIJAwQDAAAAAAECAAMRBBIhMQVBBhMiUWFxgbEykSNCcnOhwdHh8AcU8TNDUmIVNYL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQACAgMBAAIDAQAAAAAAAAAAAQIRAxIhMQRBMlFhE//aAAwDAQACEQMRAD8AqU0llEjU0llEjASJDokdEh0S0YEUSFVJJVhFWICKpJhJILJARARCyQEkFkgkAIWj5ZMLHywAhliywmWLLAAWWIrCZYxWAAiv8tIlYciMRAABH8tGKwpWRKwAAVg2WWSsgyQAqusC6S4ywTpADOxKfRv923tGljFJ9G/3be0UABIksKsiiywiftKAkiQqrGRYZREAlEmoiAkwIAICSCx1EmqxARCyYWDxOIp0EL1GSnTUXLO2UTjuK9MWYlKC9UPq1W7dRvIRWM7Riq7kDzNhA1cdRp3zVKKW3BqC4nmOL4lXr26x6lQ6kZjmX5TNeqGOVmZWvYLUUKDFYUeo1ek2DQ2NanrtZSwk6HSHB1dFr0b3AAZsh/GeTu+Xvy3sQosp9IkqqdkQka5fhJWMD2tCGW6lXU7MpzKY+WeRYDilSg16VRqGwIVuzfxHOdbwjphoExIB1A/uKY0t4j9IrCjriJEiPh66V0D02SpTYXVkbMpkysoQIiRIhSJEiAwREgywxEiRAABEEyywwkGEBFHFL9G/3b+0ULiR9G/3Te0UABIssIsgiwyCMCaiEUSKiEUQAcCTURgIRBEA6iYXHukiYFurUddistypNlp915rcRxYw1B6hIAp0yRra7Tx/H4tq9V3JL1KlRmPMZomMu8T4xUxLZqrmo17rTU5adPymcuJJ0HV0wDrc5mYQD2UA/FsALXzNAVEJ1J7V7hVNgsBlurVU7E5rC5BsRK1Q5lOt2U3Aba8ru7Df4hsQdbQXW7a8yTpa0BFtKhAtfQm5XckeHjHaqGZSSV1ALKbWlOo99d7nXXeQzltxfvPP1isKL7uQ1msHYELUU9lz4yeeoBdTn0u9Mm5v4SgXJWxF1FiO8R0qMrA3NrWB2MVjo6Xo90iqYRzkJOZTmpVD2KnjPVOEcRTHUFqL2SbpUQ703G4nhit12o7NdDcW7IcTqOhvSE4PEWqG2GrZUrAnRG5GCYNHq5EgRCghgCCGDAEEG4IkGEokGRIkQhEiwjAEwgyIYiQYRgU8UPo3+6b2ik8UPon+6b2igBFBDqINBCqIgJKP1hFEiohAIwHUQqiQQQqiIDiv6jY7JRp0VNqlRutax2XYfzwnnha2vLYDayzqP6h4m/ELAZuroJTI2tuZx4c8/tHzk2MNVcaE/UJCrbs5v4YDtudBYcsoy6S7hcA+KYIguzm7M3w051WE6LrSVbuzNb6RgLXPhM5Trw1hjv05TDcJqVfIE5iRos0KfR7a4ub3F9iJ2NHBJSWwAtcHbeHCAG9r3FjpeYucmdEYRRxTcAdvqZFvclhpLWF6NKO01zpoNhOuCX5SJX57HTaRb/Zeq9o5HFcBGwXysLG0xMbwh0bQXW+lhtPSGT95WxGHVxt2txpe0cZNfYpQi/UeWtSem17aqb7bS4papoiFnYLc5soBnV4/hoykkAWNxprOda1NmA0NxpfVjN4T29ObJDXw9X6GYo1eHojG9XCgUalzmbLym4wnnHQDHFcYaZN1rUmTU6lhsfeekNNjEGRIMIQyJjEDIkCIRhIGDGVsUPo3+6b2iksV/pP903tGgKhkEIokVjPVCwAsKJMSvRrBvGWVgBJBCqPbSQUQiwA8h6bgrxGrmIJJS2vwrac8lPMw5Dcj/rOi6e/+zqCxANNTdje8yeD0DVrqLXzG50v2ZnKVIuEbZ13RnBhKOawu+o02m8W/SBw1IIgUaKigeEo8Q4t1QtTptUI3fLdROf3p18XDTVLyapbx57Tkj0nqKe1TvrYmxEv4DpMKzAFHUk2vfMLRPgJ2dAV8P0kHS5kkrhhcEbX8Y1SoFF7gWFzJssE6HuHpvAumsatxOkqgswW5yr4mBHE6Df7lMcvitCrByofEUc6Ec7EDunnnG6fVV2sba3GmonpaMrLdSHW+6nMBOB6XUwuJ+1TDS4ckZZOxNv8Ap3apxG5serwrsNNS1xPUWnm/9LaBNerUtZEwi0723YkfpPSGnUjkIGRMmZEyhA2kDCNIGDGV8X/pP903tGj4v/Sf7pvaPEBV/uABvMriOKJBANjfTWZX/kGI8bd8E1YsdfeZvIgo6PhNUkC5vpNoVABOUwWJyAd1paxHEsq78tNZcZqhHSJiB3wy1x/DOHp8Ua/rprLL8UZaZPO4Re4NJllSVsqMXKSijA/qKgOPQgi7YRb+GplfojRzYhjzVNP+s1+IcOXHqrVLpXVAadQHUjui6L4I0HrBh2kdaYPeJk5qS4dCxuL6bVcdkAf/AF4zJxmMp0zqEW2meoci38OZ9JuGnmv46+My8VgFDZwD1iE5Kl7sswa73w3ic5X43TZsoNM3OUA02RW/CWMFjFJByqovrYZlgm4MiPmDVLrVWqKZTMha8sU8IWrlzdqlSwZAgpo3iQISUa4OLf2dDhUDrcb201tGxNlU5tvE3l7h2F6mmBubam0z+P0CyAi9rnNbukuLURqrOex70avZYheQbNa0FhuD0n0FRztpmF5Ux2Fc02Kip/ch1NIUj9GyX18bx8AlQh81SogpoClKvRNVnbu2uPOUotK7Jk1dNHR4HCf2huhqNTYAVFL5lKzm+mdO1emf+dM305TpuF1HZO2GQ2HYc52X15zB6ZJmxVNefUKFHexM0xtt9MsqSXDsv6d4TquHZyLPia7VAbaldh7TqGmfwxVw2Fp0xtToqviTD/3IPP8AGdaOQsESBgmrD+GRNcd/4xiCNImQNYd/4wbVh3/jABsV/pP901vlHlTGYoCm+v8AtMN/CNEM4ddYVR7aQVM+0tJSJ1nG+jQkJXbzjuC35SfVkRA/pHtQNEadOxlh0zIBa966h+dlgxpLOGIJtyIsZnKVmuF6yTCVcWrkrTVnYFVH1VJh8EpRql/iaorH5CAp4ZqNMuAKhRyy5WzEr32lkNc5v+YVtoo2dk6+jSpkW/eRYBmItfmJWp1PnfTwhl11379JVkpA3wqnfTyGsajQRDcDXvOpMMwJ/KAr4pMMjO4LZbABVzsfSDoatmkgsvdpffaVcYmZdRdTcHTSU8BxZMSpYB0s1ilVTScehifiVMVRSZ6YquLimalmMG/oFFlNuHC+1wTcd4hKXDwDz8ZfVbNbcbg+EKtvXzsJNIbbBJQCjblMDi3DhXxi1CWUYanSZFUXDtczpGe3ytvMTEYjLiDcHLUyhHB0uJW2qtEqOzpllOItm6tr5shKtaxzSdLGnmfxmbUt15b6lKmWJ5FiNBIo+kqE5NWzD5EIxa1NatjiBv8AjAJxEkyk5vB7Hy2l/wCjZz0ab8Ry8/xgG4pfnMqs1/ylViQZWzCi/jscWVtd0YbxTKqklT9hooWwLdJCD6zXwyCwmazW285YoVyIRjQWXMQoHvKajXwvDFs0GeyJnkQ0wbvYx0qW15gwdU+0Er6+3hMqCzo8HiEZLlsjr8Q5xg4YkjUXIHO859zp3etprcNfNRXvBYH5xnTCd8ZdTQywn4W75Xv3bg2PnHL5R/NIkbll6iruQPMzOx9RHX4TUIN1yjUGZPEceadRbpVrh2NhTF1HnLCVMS6gpTpom9nq5CB8pXX9CS/pAV+0cysjBCBcWJWDoVadZsrqFIYAOVux9Yc1awFmpFzb6pFRQfWCfHlDapSqU6Y+u1MMg+UnX7o079M6CmOyOelgb3iJ/UzEoY4KwNNuspsb1Kd8xpzWLg2PIiJkL+j1nsPS/nMuvTeoqNka2cjUWyy87DS+gJA7o+JcKo7Ra5Nlva8dWLbXpl4w2OUaC4LeLQaDT3j1gSb+N9pOkhIlVSpHHNuTtjA6SvWfWW3pG0pV1IMpKiWCdrwZiMiSRylEkavwN9ho8FWPZP2GijAOlXNLtAXmLhHvvNjDuJMZN+kl4DT0gam/pCBxb0las+vpKl4NEKmv5SCJrIs8YVJnRROrt6GXuFuVo35Cqy+Uzs2aafDkvQYci7e0K4aYvyLoq3+djGL5j7zMeq1JrHVb2DcoalXBI7uUy6dtF0gDYa8vCCqYiomyh1sTbnLKLmF/lChBaNWKzKXiTE602Gtjla8IcR1ykGmQhBBz7ES69Fd7AG/dG6sAaaC1hG2/2VsZ+G4dToklEVM5u2XS80QNP5pBtoO7SB67l6eQi9ZL8HxQzAAbA3gVTXUk6aXN4ZnFv3lWpWsZso8OKUrbDsg/hkkS0pNiCJYoVgw9IONEJhaje0zq4ufWXnN/lAPBpjKa07nX/MJ1IjkwdSpaJgiNegMjfYaKQbEdlvsNFDZjMrDC00qH6THoVCBNHD1bn5TNSr0hGpbs+NryvUBJ/GWEOZfS0TUrzRyQykZEr/LWltqEg1I2kbAVA1jN7hZ+gHi7GYzUDfQXO1t5uYKmUoqrAowDEgizDWVdo0w/kLEUA4PPvmTUovSNxcgG4HdNpgbyBQNva+x8ZnXTsTKGF4nYWY5TfnpLhx694tp5GUsZgVbbstvpoZmvgqi7EkX75L4UqN0cQXn6c5Jseqi5I8BfWc+mEqMdSR5HeaOGwAXVruRzY5rRKwdBzXeueyMiX+IjUiWFp5VA11N2JNyY6ADQeW1onqZWA8LmPbVWZzaSpj9Tp+8G2GF4Xr9JFK12/eVHM2czUQL4TSDWnlmkGBErVyI/9XYpRSVoAzWgy4P+YKvUIPrAo002bMrDO4Eq1XvJVr29JRdyD+8QWNVfsn7DRStXq9k/ZMUqgsVNAR+8tUUsZlYXETTpVQZzzTTEmalGpb2lpKomWj3OmpPrJtiFXc69yjOY4wnLxDckjRLgwFfF06Zsx7ViSANQJl4riQVSE7RGjWPaB7piVcSWfX66sBzJnZi+L9zM5ZP0eh8LIyLUsOsqIKinfq05eph6pzNfneZ3AcSKuEpm+qUVoP4Mv7Wmg0jKtXqvDswpapkb+8TKJAtFnnOdIGtfzgQ4G4N5bYBvz7oJqOu1/aSyosCjAnbyh1BI8OQj9WB3fnHvBIGySgDzlLiCMrBt0qICpU3tbeXVmL0hxHU9TqwDYjEXANrLZfzm+HGp8Zy/IdRJCv4wiV7f5mTSxOc2JAzKGp1LZQ3nDK5BsdCDY+BhPC4OjjjKzYTE3Ed3JHpM+i+suKbiZ0jRSb4yrW3g1YiW3SVntDYTRF3uJUqi8O7fy8ru0pMXhn4pTlPkYoWuQVPkYponwLMmi2ktjEhFzG9r2VR8Tt3CZQxAUdkF3/5voo9JEVCTclna1rk3sJvHCm7kQ2XW4nWc5VYUF2tT1NvOSCs7dp6jLa7g1LAiZ6PZvtD8YZqxCnkTp6TpioxXCHdhOuHWHKMtNQEUXicWOm6nMviJWpbDxNzDZr6fWBup740Jrp0PRriIpVMjHJTrsrIzHKtOr4+c7Rjce/hPKg1tRtsy9xnUcD6RBVFOsSU2p4i+cqO5v1nPmxOXUdGHLrx+HSvoYwaOHDKGBD03F0dDmRhIPoPacEotendGSfgzXBuO7WMHP6wLVrQZrEnv57SCy4Gvz/GPmEpiof1k6dS7AAF3JsFUXYxpWDdFxWCi50AFzOU6V1/pEpg3ahSZqmu1Vzcj00+U1+J8Wp4MaslXFgXp0FOdKLd7H8pxL1TXqEsSxcs7OTqzd89D4+Nx6zg+RkUuIu4Z7JY6LdSverc5rUgaw7Paq0xrY6usw6Ztry3Gm574bDYo02Yg9klSp+EibzipRpnLH02EfKbG6kGxBFiDLlOvYSjRxaYgAOclW1lqWuT598VVXp6ntIfhdTmQzgniZtdGk9a4lKvUlcV5B6oPy75jrTHdjPWgKlbxkXa8q1nlxJJVa2h8jFKFR9D5GKbRhwDPBtJBo8U60DGJ/AyTNcRRQESRrfK0Kz3A776RRSl4SxFr+DW9GEYN6Hu74ooxFvB8Rq4Zr03elf4gvaRvMGb2B6R1KxCGkKz2uWonIcveQdIopM8cWuo0hJp8NVaiubHsPa+RyM1vz9IZstNSzMqIouzMbACKKedKKs9BSdGQ3SGgrkFatSmoJBQhDUb8hM/HdJKlUFKYGEoMLFKXx1B4tvFFO7HjilxHBkySb6zHDFr30ABbfQtEmmv+TFFNjEso+x2ubW7oEPZRz0ub6ARRSJeFRCJVtz8B3yzR4m9IGzE6G4vpFFILHHF76PTXJa10AzL8o7dsZqbdatrlQfpF9IooZMcdbolFdq9vz1lepWvFFOWMUWVne/yiiim1CP/Z"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
      {btnText } →
    </button>
  </div>
</div>
  )
}


export default Card

