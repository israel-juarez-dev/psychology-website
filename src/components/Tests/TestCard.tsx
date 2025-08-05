// src/components/Tests/TestCard.tsx
import { MotionCard } from "../../animations";
import { Link } from 'react-router-dom'
import { TestMetadata } from '../../types/TestTypes'

type TestCardProps = {
  test: TestMetadata
}

const TestCard = ({ test }: TestCardProps) => {
  return (
    <Link 
      to={`/tests/${test.id}`} 
      className="block" // Important to make the Link fill the card
    >
      <MotionCard 
        className="p-6 hover:bg-gray-50 transition-colors cursor-pointer h-full"
        // whileHover={{ y: -2 }} // Optional: slight lift effect on hover
      >
        <h2 className="text-xl font-semibold mb-2">{test.name}</h2>
        {/* <p className="text-gray-700 mb-4">{test.description}</p> */}
        {/* <div className="text-blue-600 font-medium">Comenzar Test</div> */}
      </MotionCard>
    </Link>
  )
}

export default TestCard