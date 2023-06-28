import { Paper } from "@mui/material"
import TableContainer from "@mui/material/TableContainer/TableContainer"
import Table from "@mui/material/Table/Table"
import TableHead from "@mui/material/TableHead/TableHead"
import TableRow from "@mui/material/TableRow/TableRow"
import TableCell from "@mui/material/TableCell/TableCell"
import TableBody from "@mui/material/TableBody/TableBody"
import IConsulta from "../../types/IConsulta"
import styled from "@emotion/styled"
import { tableCellClasses } from "@mui/material/TableCell"

const CelulaEstilizado = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const LinhaEstilizada = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}))

const Tabela = ({consultas} : {consultas: IConsulta[] | null }) => {
  return (
    
    <>
    <TableContainer component={Paper}>
         <Table sx={{minWidth: 700}} aria-label="tabela-customizada">
            <TableHead>
                    <CelulaEstilizado>
                        Data
                    </CelulaEstilizado>
                    <CelulaEstilizado>
                        Horario
                    </CelulaEstilizado>
                    <CelulaEstilizado>
                        Profissional
                    </CelulaEstilizado>
                    <CelulaEstilizado>
                        Especialidade
                    </CelulaEstilizado>
                    <CelulaEstilizado>
                        Paciente
                    </CelulaEstilizado>
                    <CelulaEstilizado>
                        Modalidade
                    </CelulaEstilizado>
            </TableHead>
            <TableBody>
                {consultas?.map((linha) => {
                    return(
                <LinhaEstilizada>
                    <CelulaEstilizado component="th" scope="row">{new Date(linha.data).toLocaleDateString()}</CelulaEstilizado>
                    <CelulaEstilizado>{linha.horario}</CelulaEstilizado>
                    <CelulaEstilizado>{linha.profissional[0].nome}</CelulaEstilizado>
                    <CelulaEstilizado>{linha.profissional[0].especialidade}</CelulaEstilizado>
                    <CelulaEstilizado>{linha.paciente}</CelulaEstilizado>
                    <CelulaEstilizado>{linha.modalidade}</CelulaEstilizado>
                </LinhaEstilizada>
                    )
                })}
                
            </TableBody>
         </Table>
    </TableContainer>
    </>
  )
}

export default Tabela