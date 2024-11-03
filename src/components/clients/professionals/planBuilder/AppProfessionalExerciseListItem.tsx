import { ExerciseEntity } from '@core/models/ExerciseEntity'
import { useState } from 'react'
import { AppCheckbox } from '@components/common/CheckBox/AppCheckbox'
import Link from 'next/link'
import Image from 'next/image'

interface AppProfessionalExerciseListItemProps {
  exercise: ExerciseEntity
  isSelected?: boolean
  onSelectChange: (value: boolean) => void
}

export function AppProfessionalExerciseListItem({
  exercise,
  isSelected: externalIsSelected,
  onSelectChange
}: AppProfessionalExerciseListItemProps) {
  const [isSelected, setIsSelected] = useState(externalIsSelected)

  return (
    <li>
      <Link href={exercise.href!} className="exercise-card">
        <Image
          src={exercise.image.src}
          alt={exercise.image.alt}
          width={80}
          height={80}
          priority
        />
        <div className="content">
          <div className="text-wrapper">
            <span></span>
            <p>{exercise.name}</p>
          </div>
        </div>
      </Link>
      <AppCheckbox
        className="checkbox"
        aria-label="Selecionar exercício"
        isSelected={isSelected}
        onValueChange={(value) => {
          setIsSelected(value)
          onSelectChange(value)
        }}
      />
    </li>
  )
}
