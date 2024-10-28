import { Button, Divider } from '@nextui-org/react'
import { FaTriangleExclamation } from 'react-icons/fa6'

export function AppDangerZone() {
  return (
    <div className="px-6">
      <div className="mx-auto my-6 w-full rounded-lg shadow-md flex">
        <div className="flex-1 bg-gray-50 p-12 rounded-l-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Zona de perigo
          </h2>
          <p className="text-base text-gray-600 mb-6">
            Tenha atenção ao realizar ações nesta seção!
          </p>

          <Divider className="my-8" />

          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800 mb-2">
              Desconectar
            </h3>
            <p className="text-base text-gray-600 mb-3">
              Esta ação vai te desconectar da plataforma:
            </p>
            <Button
              className="px-16 py-2 bg-transparent rounded-md hover:bg-purple-500 hover:text-white transition"
              variant="bordered"
            >
              Sair da conta
            </Button>
          </div>

          <Divider className="my-8" />

          <div>
            <h3 className="font-semibold text-2xl text-gray-800 mb-2">
              Remover conta
            </h3>
            <p className="text-base mb-3">
              <span className="font-semibold text-red-600">Atenção:</span> esta
              ação é irreversível:
            </p>
            <Button
              variant="bordered"
              className="px-16 py-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition"
            >
              Excluir conta
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center bg-red-200 w-5/12 rounded-r-lg">
          <div className="text-red-400">
            <FaTriangleExclamation size={200} />
          </div>
        </div>
      </div>
    </div>
  )
}
