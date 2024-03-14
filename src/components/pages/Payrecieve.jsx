import { Card } from "@material-tailwind/react"
import { Typography } from "@mui/material"
import LOGO from "../../assets/website/LOGO.png"

const Payrecieve = () => {
  return (
    <div className="container mx-auto px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12">
    <div className="my-8">
      <Typography variant="h2" className="text-center text-gray-900 mb-4">
        Pago recibido
      </Typography>
      <Card className="p-1 mx-auto max-w-md border-4 border-t-indigo-900">
        <div className="text-center">
          <Typography variant="h4" className="text-gray-900 mb-4">
            ¡Gracias por tu compra!
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-6">
            Tu pago ha sido procesado correctamente.
          </Typography>
          <img
            src={LOGO} // Reemplaza con la ruta a tu imagen de confirmación de pago
            alt="Pago Recibido"
            className="h-64 mx-auto mb-6"
          />
          <Typography variant="body2" className="text-gray-700">
            Se ha enviado una confirmación de tu pedido a tu dirección de correo electrónico.
          </Typography>
        </div>
      </Card>
    </div>
  </div>
  )
}

export default Payrecieve