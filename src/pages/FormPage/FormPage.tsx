import { Box, Button, Card, CardContent, CircularProgress, TextareaAutosize, TextField, } from "@mui/material"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { dataSchema, DataSchemaType, sendRequest } from "../../api/api"
import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../../api/queryClient"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"


const FormContainer = styled.div`
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: center;
    padding: 70px 20px;
    background-color: #b3b3b3;
    flex: 1
`

const TitleH1 = styled.h1`
    font-size: 70px;
`

export const FormPage = () => {
    const {register, handleSubmit, formState: {errors} } = useForm<DataSchemaType>({
        resolver: zodResolver(dataSchema)
    })

    const navigate = useNavigate();

    const loginMutation = useMutation({
        mutationFn: (data: DataSchemaType) => sendRequest(data),
        onSuccess: () => {
            navigate("/form/success");
        },
        onError: (error) => {
            console.error("Ошибка авторизации:", error.message);
        } 
    }, queryClient)

    const onSubmit = (data: DataSchemaType) => {
        loginMutation.mutate(data);
    }

    return (
        <FormContainer>
                <TitleH1>Only CTA on the page</TitleH1>
                <Card sx={{minHeight: 350, width: 300}}>
                <CardContent>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 3,}}>
                        <TextField 
                            id="username"
                            required
                            label="Name" 
                            variant="outlined"
                            {...register('username')}
                            error={!!errors.username}
                            helperText={errors.username ? errors.username.message : ''}
                        />
                        <TextField 
                            id="email"
                            required 
                            label="Email" 
                            type="email" 
                            variant="outlined"
                            {...register('email')}
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : ''}
                        />
                        <TextareaAutosize
                            id="textarea"
                            required 
                            minRows={3}
                            placeholder="Message"
                            {...register('message')}
                        />
                        <Button 
                            variant="contained" 
                            sx={{backgroundColor: "#242424"}} 
                            type="submit"
                            disabled = {loginMutation.isPending}
                        >
                            {loginMutation.isPending ? <CircularProgress size={24} sx={{color: 'white'}} /> : 'Submit'}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </FormContainer>
    )
}