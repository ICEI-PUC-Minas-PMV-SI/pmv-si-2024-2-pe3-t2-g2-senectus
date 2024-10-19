import { ExerciseRepo } from '@core/repositories/ExerciseRepo'
import { LibraryStyle } from './LibraryStyle'
import Link from 'next/link'
import Image from 'next/image'

const categories = ExerciseRepo.getCategories()

export function AppLibrary() {
  return (
    <LibraryStyle>
      <h2>Biblioteca</h2>
      <p>Selecione a categória que mais te agradar:</p>

      <div id="exercise-lib">
        <Link href={categories[0].href} className="lib-card">
          <Image
            src={categories[0].image.src}
            alt={categories[0].image.alt}
            width={200}
            height={200}
          />
          <div className="text">
            <span></span>
            <p>{categories[0].name}</p>
          </div>
        </Link>

        <div className="horizontal-lib-cards">
          <Link href={categories[1].href} className="lib-card">
            <Image
              src={categories[1].image.src}
              alt={categories[1].image.alt}
              width={200}
              height={200}
            />
            <div className="text">
              <span></span>
              <p>{categories[1].name}</p>
            </div>
          </Link>

          <Link href={categories[2].href} className="lib-card">
            <Image
              src={categories[2].image.src}
              alt={categories[2].image.alt}
              width={200}
              height={200}
            />
            <div className="text">
              <span></span>
              <p>{categories[2].name}</p>
            </div>
          </Link>
        </div>

        <Link href={categories[3].href} className="lib-card">
          <Image
            src={categories[3].image.src}
            alt={categories[3].image.alt}
            width={200}
            height={200}
          />
          <div className="text">
            <span></span>
            <p>{categories[3].name}</p>
          </div>
        </Link>
      </div>
    </LibraryStyle>
  )
}
