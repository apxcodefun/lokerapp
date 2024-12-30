'use client'
import BtnSubmit from "./form/BtnSubmit"
import InputFields from "./form/InputFields"

const InputSearch = () => {
  return(
    <form>
        <InputFields name="search" label="Search" placeholder="Cari Loker" type="text" />
        <BtnSubmit type="submit" label="Search" />

      {/* Add your search functionality here */}
    </form>
  )
}

export default InputSearch