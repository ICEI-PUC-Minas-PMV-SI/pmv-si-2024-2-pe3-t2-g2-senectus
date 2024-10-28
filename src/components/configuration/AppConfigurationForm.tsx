import { Input } from '@nextui-org/input'
import { FaCity, FaEnvelope, FaRoad, FaTag } from 'react-icons/fa6'

export function AppConfigurationForm() {
  return (
    <div className="p-6 max-w-4xl w-full mx-auto">
      <div className="grid grid-cols-2 gap-4 mb-4 items-end">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Insira seu nome completo"
            labelPlacement="outside"
            variant="bordered"
            radius="sm"
            classNames={{ inputWrapper: ['border-purple-300'] }}
            startContent={
              <FaTag className="text-base text-purple-500 pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="email"
            label="Insira seu email"
            labelPlacement="outside"
            variant="bordered"
            radius="sm"
            classNames={{ inputWrapper: ['border-purple-300'] }}
            startContent={
              <FaEnvelope className="text-base text-purple-500 pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Insira seu estado"
            labelPlacement="outside"
            variant="bordered"
            radius="sm"
            classNames={{ inputWrapper: ['border-purple-300'] }}
            startContent={
              <FaCity className="text-base text-purple-500 pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Insira sua cidade"
            labelPlacement="outside"
            variant="bordered"
            radius="sm"
            classNames={{ inputWrapper: ['border-purple-300'] }}
            startContent={
              <FaCity className="text-base text-purple-500 pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        <div className="col-span-2">
          <Input
            type="text"
            label="Insira seu endereço"
            labelPlacement="outside"
            variant="bordered"
            radius="sm"
            classNames={{ inputWrapper: ['border-purple-300'] }}
            startContent={
              <FaRoad className="text-base text-purple-500 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </div>
    </div>
  )
}
