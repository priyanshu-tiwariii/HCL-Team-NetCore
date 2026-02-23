#!/bin/bash

# Exit if no feature name is provided
if [ -z "$1" ]; then
  echo "Error: Please provide a feature name."
  echo "Usage: ./generate-feature.sh leads"
  exit 1
fi

FEATURE=$1

FEATURE_CAP="$(tr '[:lower:]' '[:upper:]' <<< ${FEATURE:0:1})${FEATURE:1}"
FEATURE_UPPER=$(echo "$FEATURE" | tr '[:lower:]' '[:upper:]')

BASE_DIR="src/app/features/$FEATURE"

echo ""
echo "Scaffolding Clean Architecture for: $FEATURE..."
echo ""

# 1. Folder structure
mkdir -p "$BASE_DIR/data/entities"
mkdir -p "$BASE_DIR/data/models"
mkdir -p "$BASE_DIR/data/repositories"
mkdir -p "$BASE_DIR/domain/services"
mkdir -p "$BASE_DIR/domain/types"
mkdir -p "$BASE_DIR/presentation/components"
mkdir -p "$BASE_DIR/presentation/pages/$FEATURE-page"
mkdir -p "$BASE_DIR/presentation/state"

# 2. Manually create Angular core files (services, component, and tests)

# Repository Service
cat <<EOF > "$BASE_DIR/data/repositories/$FEATURE-repository.service.ts"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ${FEATURE_CAP}RepositoryService {

}
EOF

cat <<EOF > "$BASE_DIR/data/repositories/$FEATURE-repository.service.spec.ts"
import { TestBed } from '@angular/core/testing';

import { ${FEATURE_CAP}RepositoryService } from './$FEATURE-repository.service';

describe('${FEATURE_CAP}RepositoryService', () => {
  let service: ${FEATURE_CAP}RepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(${FEATURE_CAP}RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
EOF

# Logic Service
cat <<EOF > "$BASE_DIR/domain/services/$FEATURE-logic.service.ts"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ${FEATURE_CAP}LogicService {

}
EOF

cat <<EOF > "$BASE_DIR/domain/services/$FEATURE-logic.service.spec.ts"
import { TestBed } from '@angular/core/testing';

import { ${FEATURE_CAP}LogicService } from './$FEATURE-logic.service';

describe('${FEATURE_CAP}LogicService', () => {
  let service: ${FEATURE_CAP}LogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(${FEATURE_CAP}LogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
EOF

# State Service
cat <<EOF > "$BASE_DIR/presentation/state/$FEATURE-state.service.ts"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ${FEATURE_CAP}StateService {

}
EOF

cat <<EOF > "$BASE_DIR/presentation/state/$FEATURE-state.service.spec.ts"
import { TestBed } from '@angular/core/testing';

import { ${FEATURE_CAP}StateService } from './$FEATURE-state.service';

describe('${FEATURE_CAP}StateService', () => {
  let service: ${FEATURE_CAP}StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(${FEATURE_CAP}StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
EOF

# Page Component
cat <<EOF > "$BASE_DIR/presentation/pages/$FEATURE-page/$FEATURE-page.component.ts"
import { Component } from '@angular/core';

@Component({
  selector: 'app-$FEATURE-page',
  standalone: true,
  imports: [],
  templateUrl: './$FEATURE-page.component.html',
  styleUrl: './$FEATURE-page.component.css'
})
export class ${FEATURE_CAP}PageComponent {

}
EOF

cat <<EOF > "$BASE_DIR/presentation/pages/$FEATURE-page/$FEATURE-page.component.css"
/* styles go here */
EOF

cat <<EOF > "$BASE_DIR/presentation/pages/$FEATURE-page/$FEATURE-page.component.spec.ts"
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ${FEATURE_CAP}PageComponent } from './$FEATURE-page.component';

describe('${FEATURE_CAP}PageComponent', () => {
  let component: ${FEATURE_CAP}PageComponent;
  let fixture: ComponentFixture<${FEATURE_CAP}PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [${FEATURE_CAP}PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(${FEATURE_CAP}PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
EOF

# 3. Demo boilerplate files

# Entity
cat <<EOF > "$BASE_DIR/data/entities/$FEATURE.entity.ts"
export interface ${FEATURE_CAP}Entity {
  id: string;
}
EOF

# Models
cat <<EOF > "$BASE_DIR/data/models/$FEATURE-request.model.ts"
export interface ${FEATURE_CAP}Request {

}
EOF

cat <<EOF > "$BASE_DIR/data/models/$FEATURE-response.model.ts"
export interface ${FEATURE_CAP}Response {

}
EOF

# Domain types
cat <<EOF > "$BASE_DIR/domain/types/$FEATURE.types.ts"
export type ${FEATURE_CAP}Id = string;
EOF

# Component placeholder (as a simple class, with test)
cat <<EOF > "$BASE_DIR/presentation/components/$FEATURE.component.ts"
export class ${FEATURE_CAP}Component {

}
EOF

cat <<EOF > "$BASE_DIR/presentation/components/$FEATURE.component.spec.ts"
import { ${FEATURE_CAP}Component } from './$FEATURE.component';

describe('${FEATURE_CAP}Component', () => {
  it('should create an instance', () => {
    expect(new ${FEATURE_CAP}Component()).toBeTruthy();
  });
});
EOF

# State placeholder (interface, no test needed)
cat <<EOF > "$BASE_DIR/presentation/state/$FEATURE-state.model.ts"
export interface ${FEATURE_CAP}State {

}
EOF

# 4. Create page component template
cat <<EOF > "$BASE_DIR/presentation/pages/$FEATURE-page/$FEATURE-page.component.html"
<div class="p-6">
  <h1 class="text-xl font-semibold">
    ${FEATURE_CAP} Works
  </h1>
</div>
EOF

# 5. Create proper routing file
cat <<EOF > "$BASE_DIR/$FEATURE.routes.ts"
import { Routes } from '@angular/router';

import { ${FEATURE_CAP}PageComponent } from './presentation/pages/$FEATURE-page/$FEATURE-page.component';

export const ${FEATURE_UPPER}_ROUTES: Routes = [
  {
    path: '',
    component: ${FEATURE_CAP}PageComponent
  }
];
EOF

# 6. Barrel export
cat <<EOF > "$BASE_DIR/index.ts"
export * from './$FEATURE.routes';

export * from './data/entities/$FEATURE.entity';

export * from './data/models/$FEATURE-request.model';

export * from './data/models/$FEATURE-response.model';
EOF

# 7. Success message
echo ""
echo "Feature '$FEATURE' has been successfully scaffolded."
echo ""
echo "Location:"
echo "  $BASE_DIR"
echo ""
echo "Next step:"
echo ""
echo " Step 1: Add route to src/app/app.routes.ts"
echo ""
echo "  {"
echo "    path: '$FEATURE',"
echo "    loadChildren: () => import('./features/$FEATURE').then(m => m.${FEATURE_UPPER}_ROUTES)"
echo "  }"
echo ""
echo ""
echo "------------------------------------------------------------------"
echo "STEP 2: Add to Sidebar Navigation"
echo "Add the following object to the NAV_CONFIG array in src/app/core/layout/config/nav.config.ts:"
echo ""
echo "{"
echo "  label: '$FEATURE', // Display name in the sidebar"
echo "  icon: 'pi pi-folder', // Change this to a suitable PrimeNG icon"
echo "  routerLink: '/$FEATURE',"
echo "  module: '$FEATURE_UPPERCASE'"
echo "}"
echo "Scaffolding completed."
echo ""
echo "Done."