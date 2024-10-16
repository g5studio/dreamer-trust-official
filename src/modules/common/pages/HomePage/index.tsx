import Button from '@shared/components/Button';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { translate } from '@shared/hooks/use-translation';

const HomePage = () => (
  <ContentLayout testId="HomePage">
    <h1 class="text-primary-2/50">{translate('home.top-1.content')}</h1>
    <Button testId="test" onClick={() => {}} variant="primary">
      test
    </Button>
    <Picture fallbackSrc="home/home_top" src="home/home_top.png" />
  </ContentLayout>
);
export default HomePage;
