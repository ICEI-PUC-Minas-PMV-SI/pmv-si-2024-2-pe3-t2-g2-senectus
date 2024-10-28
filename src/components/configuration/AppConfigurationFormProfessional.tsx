import React, { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { DateInput } from '@nextui-org/react'
import {
  FaBriefcaseMedical,
  FaCalendarDays,
  FaHandHoldingMedical,
  FaRegSquarePlus,
  FaSackDollar,
  FaTrash
} from 'react-icons/fa6'

export function AppConfigurationFormProfessional() {
  const [services, setServices] = useState([
    { profession: '', serviceName: '', startDate: null, price: '' }
  ])

  const handleAddService = () => {
    setServices([
      ...services,
      { profession: '', serviceName: '', startDate: null, price: '' }
    ])
  }

  const handleRemoveService = (index: number) => {
    if (services.length === 1) return
    const updatedServices = [...services]
    updatedServices.splice(index, 1)
    setServices(updatedServices)
  }

  return (
    <div className="p-6 max-w-4xl w-full mx-auto">
      {services.map((service, index) => (
        <div key={index} className="grid grid-cols-2 gap-4 mb-4 items-end">
          <div>
            <Input
              type="text"
              label="Insira a sua profissão"
              labelPlacement="outside"
              variant="bordered"
              radius="sm"
              classNames={{ inputWrapper: ['border-purple-300'] }}
              startContent={
                <FaBriefcaseMedical className="text-base text-purple-500 pointer-events-none flex-shrink-0" />
              }
            />
          </div>

          <div>
            <DateInput
              label="Iniciou em"
              labelPlacement="outside"
              variant="bordered"
              radius="sm"
              classNames={{ inputWrapper: ['border-purple-300'] }}
              startContent={
                <FaCalendarDays className="text-base text-purple-500 pointer-events-none flex-shrink-0" />
              }
            />
          </div>

          <div>
            <Input
              type="text"
              label="Insira o nome do serviço que você presta"
              labelPlacement="outside"
              variant="bordered"
              radius="sm"
              classNames={{ inputWrapper: ['border-purple-300'] }}
              startContent={
                <FaHandHoldingMedical className="text-base text-purple-500 pointer-events-none flex-shrink-0" />
              }
            />
          </div>

          <div className="flex items-center">
            <Input
              type="number"
              label="Insira o valor a ser cobrado"
              labelPlacement="outside"
              variant="bordered"
              radius="sm"
              classNames={{ inputWrapper: ['border-purple-300'] }}
              startContent={
                <FaSackDollar className="text-base text-purple-500 pointer-events-none flex-shrink-0" />
              }
            />

            <Button
              isIconOnly
              radius="sm"
              className="ml-4 mt-6 flex-shrink-0 bg-purple-200"
              onClick={() => handleRemoveService(index)}
            >
              <FaTrash className="text-purple-500" />
            </Button>
          </div>
        </div>
      ))}

      <Button
        color="primary"
        radius="sm"
        onClick={handleAddService}
        className="mt-4 px-16"
        endContent={<FaRegSquarePlus className="text-base text-white" />}
      >
        Mais serviço
      </Button>
    </div>
  )
}
