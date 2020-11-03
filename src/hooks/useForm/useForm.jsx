import { useState } from "react";

export const useForm = ({
    defaultValues = {}, validateField = {}
}) => {
    const [values, setValues] = useState({ ...defaultValues })
    const [error, setError] = useState(null)

    const handleReset = (vals = defaultValues) => setValues({ ...vals }) 

    const handleInputChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e, handler) => {
        e.preventDefault()

        let $error = null

        Object.entries(validateField).forEach(element => {
            const [key, validate] = element

            const response = validate(values)

            
            if (response) {
                $error = { ...$error, [key]: response }
                return
            }

            return
        });

        if ($error) {
            setError($error)
        } else {
            setError(null)
            handler(values)
        }
    }

    return [values, handleInputChange, handleReset, handleSubmit, error]
}
